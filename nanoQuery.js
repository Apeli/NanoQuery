var nq = {

	elem : function(id){
		return getElementById(id);
	}
	, e : function(id)
	{
		//Shortcut, oh no! This is master.
		return this.elem(id); 
	}
	, el : function(id)
	{
		//Another shortcut
		return this.elem(id);
	}
};