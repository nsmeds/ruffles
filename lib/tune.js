__().sine().panner().delay().lowpass(300).dac().play();

__.loop({steps:7,interval:500});

__('sine').bind('step',function(data,index,array){

    __.frequency(
        __.pitch2freq(
            __.scales('major')[__.random(0,6)] + __.random(5,7) * 12
        )
    );

},[1,2,3,0,0,6,7]);

__.loop('start');
// __.play(); 