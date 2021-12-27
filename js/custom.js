function getIPGeoDetails(){

    let URL="https://api.ipgeolocation.io/ipgeo?apiKey=357c8fda50224090ad413da4c3e7e40e"

    axios.get(URL).then(function (res){

        let ResJSON=res.data;

        $('#IP').html(ResJSON['ip']);
        $('#Country').html(ResJSON['country_name']);
        $('#State').html(ResJSON['state_prov']);
        $('#City').html(ResJSON['city']);
        $('#Latitude').html(ResJSON['latitude']);
        $('#Longitude').html(ResJSON['longitude']);
        $('#timeZone').html(ResJSON['time_zone']['name']);
        $('#ISP').html(ResJSON['isp']);
        $('#Currency').html(ResJSON['currency']['name']);
        $('#flag').attr('src', ResJSON['country_flag'])

    })


}

getIPGeoDetails();