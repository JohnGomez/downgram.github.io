var regex_url = /(<\s*meta property=\"og:video:secure_url\"[^>]*>)/g;
 
$('#download').click(function(){
    var url = $('input').val(); 

    $.get(url, function(data, status){
        var html = data.toString();
        var tag = html.match(regex_url);
        
        var html_tag = $.parseHTML(tag[0]);
        var url_video = html_tag[0].content.replace('"', '').replace('"', '');       

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


