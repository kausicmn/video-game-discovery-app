const getcropperurl=(url:string)=>{
const find='media/'
const index= url.indexOf(find)+find.length
return url.slice(0,index)+'crop/600/400/'+url.slice(index);
}
export default getcropperurl