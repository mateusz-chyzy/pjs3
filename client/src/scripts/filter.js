export default function   (data,variable) {
    if (data === undefined) return data;
    return data.filter(item => {
        if(item.name.toLowerCase() === variable.toLowerCase()){
            return true;
        }else{
            return false;
        }
    })
}