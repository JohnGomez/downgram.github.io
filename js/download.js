var regex_url= /("http[s]?:\/\/)?instagram.fsdu17-1(.*")/g;
 
$('button').click(function(){
    var url = $('input').val(); 

    $.get(url, function(data, status){
        var html = data.toString();

        console.log(html);
        var tag = html.match(regex_url);
        var url_video = tag[1].replace('"', '').replace('"', '');    

        fetch(url_video)
            .then(resp => resp.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                
                // the filename you want
                a.download = 'video.mp4';
                document.body.appendChild(a);
                a.click();

                window.URL.revokeObjectURL(url);
                alert('Download Realizado com Sucesso!');
            })
        .catch(() => alert('Poxa vida, Ocorreu um erro :('));
    });
}
);

