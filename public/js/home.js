
function add_job() {
  var add_job= document.getElementById('Job');
  var nodeFather = add_job.parentNode;
      var node_clone = add_job.cloneNode();
      content = add_job.innerHTML;
     node_clone.removeAttribute('id');
     node_clone.innerHTML = content;
    nodeFather.appendChild(node_clone);
}