$(function(){

	if (navigator.geolocation){
		if($("[name=lat]").val() != "" && $("[name=lng]").val() != ""){
			loadMap(parseFloat($("[name=lat]").val()), parseFloat($("[name=lng]").val()));				
		} else {
			navigator.geolocation.getCurrentPosition(function(coords){
				loadMap(coords.coords.latitude, coords.coords.longitude);
			});
		}
		
	} else {
		loadMap(4.655755488215205, -74.05955611279298);
	}

	//load departaments
	$('body').on('change', '#dep', function(ev){				
		var city = $('#city');
		city.prop('disabled', true);	
		$('#loading-city').show();			
		city.html('<option>Cargando...</option>');
		jQuery.get('/api/cities/'+$(this).val(), function(resp){			
			var html = "<option>Seleccione...</option>";
			resp.forEach(function(el){				
				html+="<option value="+ el.id +">"+ el.name +"</option>";
			});
			city.html(html);
			city.prop('disabled', false);
			$('#loading-city').hide();				
		});
	});

});

function getCoords(coords){
	if(coords){
		$("[name=lat]").val(coords.lat());
		$("[name=lng]").val(coords.lng());	
	}	
}

function loadMap(lat, lng){		
	var myLatLng = {lat: lat, lng:lng};

	var options = {
		center: myLatLng,
		zoom: 12
	}

	var map = document.getElementById('map');
	var mapa = new google.maps.Map(map, options);	
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: mapa,
		draggable: true
	});

	getCoords(marker.getPosition());

	google.maps.event.addListener(marker, 'dragend',function(){
		getCoords(marker.getPosition())
	});

	//var info = new google.maps.InfoWindow();

	/*marker.addListener('click', function(){
		info.open(mapa, marker);
	});*/

	var autocomplete = document.getElementById('autocomplete');

	var search = new google.maps.places.Autocomplete(autocomplete);
	search.bindTo('bounds', mapa);
	
	search.addListener('place_changed', function(){
		marker.setVisible(false);
		var place = search.getPlace();				
		if(!place.geometry.viewport){
			console.log('no se pudo mostrar el lugar');
			return;
		}

		if(place.geometry.viewport){
			mapa.fitBounds(place.geometry.viewport);
		} else {
			mapa.setCenter(place.geometry.location);
			mapa.setZoom(18);
		}

		marker.setPosition(place.geometry.location);
		marker.setVisible(true);
		getCoords(marker.getPosition());
	});//end event search

	mapa.addListener('click', function(event){
		//console.log('hizo click--', event.latLng.lat())
		marker.setPosition(event.latLng);
		getCoords(event.latLng);


		/*var geocoder = new google.maps.Geocoder();

		geocoder.geocode({'latLng': marker.getPosition()}, function(results, status) {
		 if (status == google.maps.GeocoderStatus.OK) {
			 var address=results[0]['formatted_address'];
			 alert(address);
		 }
	 	});*/


	});//close map click event

	//start marker center

	google.maps.event.addListener(mapa, 'center_changed', function(){          
    window.setTimeout(function() {
      var center = mapa.getCenter();
      marker.setPosition(center);           
      getCoords(center);               
    }, 100);
  });

	//end marker center

	$('#myLocation').click(function(){				
		$('#loadLocation').show();
		$('#autocomplete').val('');
		var _this = this;
		$(_this).prop('disabled', true);				
		
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(function(coords) {						
				marker.setPosition({lat:coords.coords.latitude, lng:coords.coords.longitude});
				mapa.setCenter({lat:coords.coords.latitude, lng:coords.coords.longitude});
				mapa.setZoom(14);
				getCoords(marker.getPosition());
				$('#loadLocation').hide();
				$(_this).prop('disabled', false);
			});		
		}
			
	});
	
}