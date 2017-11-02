﻿using UnityEngine;
using System.Collections;
using System.IO.Ports;
using System;


public class sensorp : MonoBehaviour {

	SerialPort serial = new SerialPort("COM3",115200);
	 // Update is called once per framevodivovovoccxvcvsdfq1 23445
	void start(){
		serial.ReadTimeout = 100000;
	}
	void Update ()
	{
		Application.targetFrameRate = 20;

		if (!serial.IsOpen) {
			serial.Open ();
		}

		string s = serial.ReadLine ();

		string[] mystring = s.Split (';');

		string axX = mystring [0];

		float con=0.0f;

		float converted = float.Parse (axX);

		if (converted > 0.5) {
			con = 1.0f;
		}
		else if (converted < -0.5) {
			con = -1.0f;
		}

		this.transform.Translate (con*Time.deltaTime*200f,0f,0f);

		Debug.Log (converted);

	}
}