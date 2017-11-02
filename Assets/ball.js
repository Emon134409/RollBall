	#pragma strict
	import UnityEngine.UI;
	var thePrefab:GameObject;
	var throws:boolean;
	var flag:int;
	var tb:GameObject;
	var score:int;
	var scoretext:Text;
	var life:int;
	var lifetext:Text;
	var gameover:Text;
	//private var gameController : GameController;

	function Start(){
	 // var ball:GameObject =Instantiate(thePrefab,transform.position,transform.rotation) as GameObject ;
	  //flag=0;
	//  thrower();
	score=0;
	life=5;
	setlifeText(life);
	setscoreText(score);
	gameover.text="";
	}



	function Update(){
	if(throws==true){
		thrower();
	}
	}

	function thrower(){
	var t:player;
	t=tb.GetComponent("player");
	var l:Vector3=t.print();
	//Debug.Log(l);
	//var lastpos:Vector3=Vector3(491.2,2,305.8);102.4
	var ballpos:Vector3=Vector3(287.2,90.4,199.2);
	//var ballpos:Vector3=Vector3(280,90,202.5);
	var ball:GameObject =Instantiate(thePrefab,ballpos,transform.rotation) as GameObject; 
	var n:Vector3=Vector3(0,0,30);
	var g:Vector3=Vector3(0,0,50);
	// if(flag==1){ 
	  var e:Vector3=Vector3(480,1.1,360);
	  if(l.x>e.x){ 
	  l=l-g;
	  ball.GetComponent.<Rigidbody>().useGravity=false;
	  ball.GetComponent.<Rigidbody>().AddForce(l*300);
	  throws=false;
	  timer();}

	  else if (l.x<e.x)
	  {
	  l=l+n;
	  ball.GetComponent.<Rigidbody>().useGravity=false;
	  ball.GetComponent.<Rigidbody>().AddForce(l*300);
	  throws=false;
	  timer();
	  }
	  }


//	  else{
	// ball.GetComponent.<Rigidbody>().useGravity=false;
	//  ball.GetComponent.<Rigidbody>().AddForce(lastpos*100);
	//  throws=false;
//	  timer();
	//  flag=1;
	//  }
//	}

	function timer(){
	Debug.Log("okkkkkk");
		if(throws==false){
		yield WaitForSeconds(1);
		throws=true;
		}
		score=score+2;
		setscoreText(score);
	}


	  //ball.AddComponent<Rigidbody>();
	  //var rb=ball.GetComponet<Rigidbody>();
	 // rb.AddForce(transform.forward*1000);
	  //rb= GetComponent<Rigidbody>();
	 // rb.GetComponent.<Rigidbody>().AddForce(transform.forward*1000);
	  //rb.AddForce(transform.forward*1000);
	//var rb = thePrefab.GetComponent.<Rigidbody>();


function setlifeText(life){
if (life==0){
gameover.text="Game Over";
yield WaitForSeconds(1);
Application.LoadLevel (Application.loadedLevel);
}
lifetext.text="Life: "+life.ToString();

	}


function setscoreText(score){
	scoretext.text="Score: "+score.ToString();
	}