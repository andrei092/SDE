fn div(a:i32, b:i32)->Option<i32>{
    if(b!=0){
       return Some(a/b);
    }
    return None;
}

fn main(){
    let a:i32 =3;
    let b:i32=2;
    println!("{:?}", div(a, b));
}


