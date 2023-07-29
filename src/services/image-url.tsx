import noImage from '../assets/no-image-placeholder.webp'
const getcropperurl=(url:string)=>{
if(!url) return noImage;
const find='media/'
const index= url.indexOf(find)+find.length
return url.slice(0,index)+'crop/600/400/'+url.slice(index);
}
export default getcropperurl