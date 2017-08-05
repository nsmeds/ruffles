//set up a sound and start it playing
__().sine().panner().delay().lowpass(300).dac().play();

//cinfigure the loop: 8 steps, 100ms between steps
__.loop({steps:7,interval:500});

//bind to the step event. the callback is passed
//the current array element, index and a reference to the array
__('sine').bind('step',function(data,index,array){

    //use the incoming data to set the frequency
    __.frequency(
        __.pitch2freq(
            __.scales('major')[__.random(0,6)] + __.random(5,7) * 12
        )
    );
    //callback iterates over the data array
},[1,2,3,0,0,6,7]);

//start the sequencer
__.loop('start');
// __.play(); 