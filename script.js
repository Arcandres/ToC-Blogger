function readTime(blogId, postId) {

   const apiKey = 'PEGA TU KEY AQUÍ',
      apiUrl = 'https://www.googleapis.com/blogger/v3/blogs/';

   // Hacemos la petición al post mediante el ID
   fetch(`${apiUrl}${blogId}/posts/${postId}?key=${apiKey}`)
      .then(res => res.json())
      .then(post => {

         /**
          * Reemplazamos las etiquetas HTML y 
          * guardamos en un array las palabras
          */
         let p = post.content.replace(/<[^>]*>?/g, '').split(' ');

         /**
          * Dividimos las palabras entre 200
          * que es el ppm promedio y redondeamos
          * el resultado
          */
         p = Math.round(p.length / 200);

         /**
          * Finalmente al elemento con el mismo ID
          * del post, le agregamos el calculo
          */
         document.getElementById(postId)
            .textContent = p < 2 ? ' menos de 1 min' : ' ' + p + ' min';
      })
      .catch(err => console.log(err))
}


