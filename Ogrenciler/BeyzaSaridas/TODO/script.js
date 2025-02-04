let todoList=[];
//ekleme, silme,kontrol,göürntüleme
function addTodo(task){
   let newTask={
      id:todoList.length+1, //1'den başlatma
      task:task,
      control:false
   }
   todoList.push(newTask);
   console.log(`✅"${newTask.task}" eklendi.`);
}
function removeTodo(id){
   let index=todoList.findIndex(task=>task.id==id);
   console.log(`❎"${todoList[index].task}" silindi.`);
   todoList.splice(index,1);
   console.log("--------------------------------------------------------");
   return listTodo();
}
function controlTodo(id){
   let task=todoList.find(task=>task.id==id);
   if (task) {
      task.control = true;
      console.log(`✔️ "${task.task}" tamamlandı`);
  } else {
      console.log("❌ Böyle bir ID bulunamadı.");}
   console.log("--------------------------------------------------------");
   return listTodo();
}
function listTodo(){
   if (todoList.length === 0) {
      console.log("Yapılacaklar listesi boş!!!");}
   for(let i=0;i<todoList.length;i++){
      let status = todoList[i].control ? "✔️" : "❌";
      console.log(`${status},🆔 :${todoList[i].id}, 📝:${todoList[i].task}`);
   }
}
listTodo();