function copyText(id){
  const el = document.getElementById(id);
  if(!el) return;
  navigator.clipboard.writeText(el.textContent).then(()=>{
    const btn = document.querySelector(`[data-copy='${id}']`);
    if(btn){
      const old = btn.textContent;
      btn.textContent = "Copied";
      setTimeout(()=>btn.textContent = old, 900);
    }
  });
}
