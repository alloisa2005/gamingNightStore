import { NextResponse } from "next/server";

import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dayyupv1u', 
  api_key: '883894447148336', 
  api_secret: '6n0TPDC4mZL-NYqdVYdmn44VaHI',   
});

const POST = async (req) => {
  const data = await req.formData();
  const image = data.get("file");
  
  if(!image) {
    return NextResponse.json({ data: "error" }, { status: 400 });
  }else{
    
    const bytes = image.arrayBuffer();
    const buffer = Buffer.from(await bytes); 

    const response = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({folder: 'gns/gns-users'},  (err, result) =>{
        if(err) {
          reject(err);
        }       
        resolve(result);        
      }).end(buffer);
    })    

    return NextResponse.json({imgUrl: response.secure_url}, { status: 201 } );
  }
  
};

export { POST };