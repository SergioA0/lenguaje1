function datos(){
    this.nombre="";
    this.apellido="";
    this.usuario="";
    this.direccion="";
    this.correo="";
    this.comentario="";

    this.getNombre=function(){
        return nombre;
    }
    this.getApellido=function(){
        return apellido;
    }
    this.getUsuario=function(){
        return usuario;
    }
    this.getDireccion=function(){
        return nombre;
    }
    this.getCorreo=function(){
        return apellido;
    }
    this.getComentario=function(){
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
    this.setDireccion=function(direc){
        direccion=direc;
    }
    this.setCorreo=function(corr){
        correo=corr
    }
    this.setComentario=function(comen){
        comentario=comen;
    }
}

function salida(){
    var obj=new datos()

    var nomb=document.getElementById("nombre").value;
    var apell=document.getElementById("apellido").value;
    var usu=document.getElementById("usuario").value;
    var direc=document.getElementById("direccion").value;
    var corr=document.getElementById("correo").value;
    var comen=document.getElementById("comentario").value;    

    obj.setNombre(nomb);
    obj.setApellido(apell);
    obj.setUsuario(usu);
    obj.setDireccion(direc);
    obj.setCorreo(corr);
    obj.setComentario(comen);

    var nr1=obj.getNombre();
    var nr2=obj.getApellido();
    var nr3=obj.getUsuario();
    var nr4=obj.getDireccion();
    var nr5=obj.getCorreo();
    var nr6=obj.getComentario();

    //Impresion de valores
    document.write("FORMULARIO CON DATOS PRINCIPALES: <br>");
    document.write("NOMBRE: "+nr1+"<br>");
    document.write("APELLIDO: "+nr2+"<br>");
    document.write("USUARIO: "+nr3+"<br>");
    document.write("DIRECCION: "+nr4+"<br>");
    document.write("CORREO: "+nr5+"<br>");
    document.write("COMENTARIO: "+nr6+"<br>");
}