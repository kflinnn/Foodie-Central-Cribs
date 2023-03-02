var modelConfig = {
 
    "name": "user",
    "properties": {
    
     "firstname": {
       "type": "string"
     },
     "lastname": {
       "type": "string"
     },
     "username": {
       "type": "string",
       "required": true
     },
    "email": {
       "type": "number",
       "required": true
     },
     "password": {
        "type": "number",
        "required": true
      }    
   }
 };	
  var model = new loopback.model(modelConfig); 