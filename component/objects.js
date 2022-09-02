AFRAME.registerComponent("objects",{
init:function(){
    this.mobs()
},

mobs:function(){
    var ground=document.querySelector("#scene")
    var posX = Math.random() * 3000 + -1000;
    var posY = Math.random() * 2 + -1;
    var posZ = Math.random() * 3000 + -1000;
     for(var i=0; i<7; i++){
        var id="cow"+i
        var cow =document.createElement("a-entity")
        cow.setAttribute("id",id)
        cow.setAttribute("position",{posX,posY,posZ})
        cow.setAttribute("scale", { x:0.04, y:0.04, z:0.04 })
        cow.setAttribute("gltf-model","./assets/minecraft_-_cow/scene.gltf")
        //cow.setAttribute("animation","property: position; to: 1 0 5; dur: 10000")
        ground.append(cow)



   }
}
})