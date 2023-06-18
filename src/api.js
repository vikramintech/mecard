const api = (data) => {
    console.log(data);
    return `https://placehold.co/600x400/${data.color.slice(1)}/black?text=${
      data.name
    }&font=${data.font}`;
  };
  export default api;
  
  //https://placehold.co/600x400/orange/white?text=hello+world&font=roboto
  
  // https://placehold.co/600x400/${data.color.slice(1)}/white?text=${data.name}&font=${data.font}