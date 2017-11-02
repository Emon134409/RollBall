#pragma strict
var position:Vector3;
var tb:Transform;
var theball:GameObject;

function Start () {
position=transform.position;
//Debug.Log("StarrtPosition"+position);
}
function Awake() {
        Application.targetFrameRate = 200;
    }

function Update () {
//Debug.Log("Start");
var minx:float;
if(position.z>300 && position.z<370){
transform.Translate(Input.GetAxis("Horizontal")*150*Time.deltaTime,0f,0f);
}
else{
if(position.z>=370 && Input.GetAxis("Horizontal")<0){
transform.Translate(Input.GetAxis("Horizontal")*150*Time.deltaTime,0f,0f);
}
else if(position.z<=300 && Input.GetAxis("Horizontal")>0){
transform.Translate(Input.GetAxis("Horizontal")*150*Time.deltaTime,0f,0f);
}

}
}

function OnCollisionEnter (col : Collision)
{
    var b:ball=theball.GetComponent("ball");
    if(col.gameObject.name == "ball(Clone)")
    {

       Destroy(col.gameObject);
       Debug.Log("Destroyed");

       b.life=(b.life)-1;
       Debug.Log("Ball:"+b.life );
       b.setlifeText(b.life);

       b.score=(b.score)-2;
       Debug.Log("Ball:"+b.score );
       b.setscoreText(b.score);


       // ball.score=(ball.score)-2;
      //  Debug.Log(ball.score);
      //  if(ball.score<0){
      //  ball.score=0;
      //  }
     //   ball.SetScoreText(ball.score);
    }
    
}

function print(){
Debug.Log("Playerrrrrr");
position=tb.position;
Debug.Log("FPosition"+position);
return position;
}
