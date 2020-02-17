const url = 'http://192.168.100.5:4000/send-email'
const envio=async(x,y,z,a)=>{
    const data = JSON.stringify({
      peli: x,
      boletos: y,
      email: z,
      valorboleto: a,
      
    })
    try{
      const response = await fetch(url,{
        method: 'POST',
        body: data,
        headers:{
          'Content-type': 'application/json'
        }
      })
      if (response.ok){
        console.log('respuesta favorable')
      }
    }catch(error){
      console.log(error)
    }
  }

export default envio;