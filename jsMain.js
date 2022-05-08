/*window.addEventListener('DOMLoadedContent', async1);

async function async1(){
	const URLS = [
            `https://jsonplaceholder.typicode.com/comments/1`,
	`https://jsonplaceholder.typicode.com/comments/2`,
	`https://jsonplaceholder.typicode.com/comments/3`
             ]
	let requests = await Promise.allSettled(URLS.map(url=> fetch(url).then(response=>{
		console.log(response);
		return response.json();
	})))
	.then(datas=>{
		console.log(datas);
		const htmlData = datas.map((data,i)=>{
                       if(data.status=='fulfilled'){
                       	return `<p>DATA ${i+1} : ${data.value.email}</p> <br>`;
                       }
                       else if(data.status=='rejected'){
                       	return `<p>ERR:${URLS[i]}` `${data.reason}</p> <br>`;
                       }
		});
		document.getElementById('article-one-div').innerHTML = htmlData.join("");
	})
	.catch(err=>{
		console.error(err);
		document.getElementsByClassName('articleErr-one').innerHTML = err;
	})
}
async1()

*/
