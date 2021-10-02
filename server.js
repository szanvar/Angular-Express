const express = require('express');

const app = express();

app.listen(4000, (req, res) => {
    console.log("Express API is running at port 4000");  
  })

app.get('/getData', adminDetails);
function adminDetails(request,response)
{
        response.json([
        {
            "Name" : "Seema Zanvar",
            "Email" : "seemazavar08@gmail.com",
            "Mobile" : 8149290720
        }
    ]);
}

app.get('/getBatches', batches);
function batches(request,response)
{
    response.json([
        {
            "Batch" : "Angular",
            "Fee" : 11000
        }
    ]);  
}
app.get('/', Demo);
function Demo(request,response)
{
    response.json({
      "Data" : "Admin Details" 
    })
}