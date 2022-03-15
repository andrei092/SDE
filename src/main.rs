
struct Table{
    a: Vec<i32>,
}
impl Table{
fn new_Tab() -> Table {
    Table {
      a: vec![],
    }
}

fn add(&mut self, no: i32) -> () {
    let mut k:usize=0;
    let mut pos = 0;
    if self.a.len()!=0{
        for element in &self.a{
            if *element<no{
                pos=k;
                }
            k=k+1;
        }
        self.a.insert(pos, no);
    }
    else {self.a.insert(0, no);
    }
}

fn remove(&mut self, no: i32){
    let mut k:usize=0;
    let mut j = 0;
    if self.a.len()!=0{
        for element in &self.a{
            if *element==no{
                j=k;
                }
            k=k+1;
        }
        self.a.remove(j);
    }
    else {self.a.insert(0, no);
    }
}
}

fn main() {
    let mut tab=Table::new_Tab();
    tab.add(4);
    tab.add(2);
    println!("{:?}", tab.a);
}
