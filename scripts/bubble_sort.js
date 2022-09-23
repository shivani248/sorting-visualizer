
function Bubble()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"#ffff80");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "#ff704d");//Color update
                div_update(divs[j+1],div_sizes[j+1], "#ff704d");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "#ff704d");//Height update
                div_update(divs[j+1],div_sizes[j+1], "#ff704d");//Height update
            }
            div_update(divs[j],div_sizes[j], "#4db8ff");//Color updat
        }
        div_update(divs[j],div_sizes[j], "#1affa3");//Color update
    }
    div_update(divs[0],div_sizes[0], "#1affa3");//Color update

    enable_buttons();
}

