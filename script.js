//your JS code here. If required.

function transform(){
const p=new Promise((res)=>{
	let num=document.querySelector("#ip");
	let nom=num.value;
	setTimeout(()=>{
		res(nom);
	},2000)
})
	p.then((data)=>{
		let ele=document.querySelector("#output");
		ele.innerHTML=`Result:${data}`;
		return data;
	}).then((data)=>{
		setTimeout(()=>{
			let ele=document.querySelector("#output");
		    ele.innerHTML=`Result:${data}`;
		},2000)
		return data;
	}).then((data)=>{
            let ele=document.querySelector("#output");
		    ele.innerHTML=`Result:${2*data}`;
            data=2*data;
		return new Promise((res)=>{
			setTimeout(()=>{
				res(data);
			},1000)
		})
         
		return data;
	}).then((data)=>{
		 let ele=document.querySelector("#output");
          data=data-3;
		 ele.innerHTML=`Result:${data-3}`;
		 return new Promise((res)=>{
			 setTimeout(()=>{
				 res(data); 
			 },1000)
		 })
		 
         return data;

	}).then((data)=>{
		let ele=document.querySelector("#output");
		    ele.innerHTML=`Result:${data/2}`;
             data=data/2;
             return new Promise((res)=>{
			 setTimeout(()=>{
				 res(data);
			 },1000)
		 })
         
         return data;
	}).then((data)=>{
		let ele=document.querySelector("#output");
		    ele.innerHTML=`Final Result:${data+10}`;
            return new Promise((res)=>{
			 setTimeout(()=>{
				 res(data);
			 },1000)
		 })
            
	})
}

transform();