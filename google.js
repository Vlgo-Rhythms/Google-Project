const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("keydown", function(event){
    if(event.code === "Enter"){
        search();
    }
});

function search(){
    const input = searchInput.value;
    const encodedInput = encodeURIComponent(input);
    window.location.href = "https://www.google.com/search?q="+ encodedInput+"&rlz=1C1ONGR_en__1147IN1149&oq="+ encodedInput+"&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIPCAEQABhDGLEDGIAEGIoFMhIIAhAAGEMYgwEYsQMYgAQYigUyDwgDEAAYQxixAxiABBiKBTIPCAQQABhDGLEDGIAEGIoFMg8IBRAAGEMYsQMYgAQYigUyDwgGEAAYQxixAxiABBiKBTINCAcQABiDARixAxiABDIHCAgQABiABDINCAkQABiDARixAxiABNIBCTY0MzJqMGoxNagCCLACAfEF3RhdBsOxXQfxBd0YXQbDsV0H&sourceid=chrome&ie=UTF-8";
}