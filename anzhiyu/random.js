var posts=["2024/06/04/hello-world/","2024/06/04/第二篇文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };