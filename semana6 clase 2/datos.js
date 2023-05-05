function datos(){
    this.nombre="";
    this.apellido="";
    this.usuario="";

    this.getNombre=function(){
        return nombre;
    }
    this.getApellido=function(){
        return apellido;
    }
    this.getUsuario=function(){
        return usuario;
    }
    this.setNombre=function(nomb){
        nombre=nomb;
    }
    this.setApellido=function(apell){
        apellido=apell;
    }
    this.setUsuario=function(usu){
        usuario=usu;
    }
}

function salida(){
    var obj=new datos()

    var nomb=document.getElementById("nombre").value;
    var apell=document.getElementById("apellido").value;
    var usu=document.getElementById("usuario").value;

    obj.setNombre(nomb);
    obj.setApellido(apell);
    obj.setUsuario(usu);

    var nr1=obj.getNombre();
    var nr2=obj.getApellido();
    var nr3=obj.getUsuario();

    //Impresion de valores
    document.write("FORMULARIO CON DATOS PRINCIPALES: <br>");
    document.write("NOMBRE: "+nr1+"<br>");
    document.write("APELLIDO: "+nr2+"<br>");
    document.write("USUARIO: "+nr3+"<br>");
}