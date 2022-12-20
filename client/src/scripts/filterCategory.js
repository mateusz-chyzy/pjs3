export default function  (data,variable) {
    if (data === undefined) return data;
    return data.filter(item => {
        if(item.category.toLowerCase() === variable.toLowerCase()){
            return true;
        }else{
            return false;
        }
    })
}