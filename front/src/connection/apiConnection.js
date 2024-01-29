export const endpoint = 'http://localhost:8080'

export const connectionData = async (  direction , method , body = false ) => {

try {
            const requestOptions = {
                method: method,
            };
            if(body){
                requestOptions.headers = {
                    'Content-Type': 'application/json',
                        
                };               
                requestOptions.body = JSON.stringify(body);
            }
            if (localStorage.getItem('user')) {
               const user = JSON.parse(localStorage.getItem('user'));
               const token = user.token;
               //console.log(token);
               requestOptions.headers = {
                ...requestOptions.headers,
                'authorization': `${token}`,
              }
               
                
            } 
            //console.log(requestOptions);
            const response = await fetch(endpoint+'/'+direction,requestOptions);
           
            return response; 

        }
catch (error) {
            console.error('Ha ocurrido un error con la API',error);
        }
}
