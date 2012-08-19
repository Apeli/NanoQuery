var nq = {

	elem : function(id){
		return getElementById(id);
	}
	, e : function(id)
	{
		//Shortcut, oh yes
		return this.elem(id); 
	}
};