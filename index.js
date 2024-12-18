const element=document.getElementById('mydiv');
const searchElement=document.getElementById('search');
const closebtn=document.getElementById('close');
const chaticon=document.getElementById('chat')
const chatele=document.getElementById('chat-box');
const chatclosebtn=document.getElementById('chat-close');
const showDaybtn=document.getElementById('day')
const showMonthbtn=document.getElementById('month')
const showWeekbtn=document.getElementById('week')
const showDayclass=document.getElementById('show-day')
const showWeekclass=document.getElementById('show-week')
const showMonthclass=document.getElementById('show-month')
const firstbtn=document.getElementById('first')
const secondbtn=document.getElementById('second')
const thirdbtn=document.getElementById('third')
const fourthbtn=document.getElementById('fourth')
const firstmid=document.getElementById('first-mid')
const secondmid=document.getElementById('second-mid')
const thirdmid=document.getElementById('third-mid')
const fourthmid=document.getElementById('fourth-mid')
const barchartfirst=document.getElementById('bar-chart-1')
const barchartsecond=document.getElementById('bar-chart-2')
const barchartthird=document.getElementById('bar-chart-3')
const barchartfourth=document.getElementById('bar-chart-4')
const bodybtn=document.getElementById('body')
const toggle=document.getElementById('bgc-toggle')

firstbtn.addEventListener('click',function(){
    firstbtn.classList.add('hover-bgc');
    secondbtn.classList.remove('hover-bgc');
    thirdbtn.classList.remove('hover-bgc');
    fourthbtn.classList.remove('hover-bgc');
    firstmid.classList.remove('hide-middle');
    secondmid.classList.add('hide-middle');
    thirdmid.classList.add('hide-middle');
    fourthmid.classList.add('hide-middle');
   barchartfirst.classList.remove('hide-middle')
    barchartsecond.classList.add('hide-middle');
    barchartthird.classList.add('hide-middle');
    barchartfourth.classList.add('hide-middle')
})
secondbtn.addEventListener('click',function(){
    firstbtn.classList.remove('hover-bgc');
    secondbtn.classList.add('hover-bgc');
    thirdbtn.classList.remove('hover-bgc');
    fourthbtn.classList.remove('hover-bgc');
    firstmid.classList.add('hide-mid');
    secondmid.classList.remove('hide-mid');
    thirdmid.classList.add('hide-mid');
    fourthmid.classList.add('hide-mid');
   barchartfirst.classList.add('hide-mid')
    barchartsecond.classList.remove('hide-mid');
    barchartthird.classList.add('hide-mid');
    barchartfourth.classList.add('hide-mid')
})
thirdbtn.addEventListener('click',function(){
    firstbtn.classList.remove('hover-bgc');
    secondbtn.classList.remove('hover-bgc');
    thirdbtn.classList.add('hover-bgc');
    fourthbtn.classList.remove('hover-bgc');
    firstmid.classList.add('hide-mid');
    secondmid.classList.add('hide-mid');
    thirdmid.classList.remove('hide-mid');
    fourthmid.classList.add('hide-mid');
   barchartfirst.classList.add('hide-mid')
    barchartsecond.classList.add('hide-mid');
    barchartthird.classList.remove('hide-mid');
    barchartfourth.classList.add('hide-mid')
})
fourthbtn.addEventListener('click',function(){
    firstbtn.classList.remove('hover-bgc');
    secondbtn.classList.remove('hover-bgc');
    thirdbtn.classList.remove('hover-bgc');
    fourthbtn.classList.add('hover-bgc');
    firstmid.classList.add('hide-mid');
    secondmid.classList.add('hide-mid');
    thirdmid.classList.add('hide-mid');
    fourthmid.classList.remove('hide-mid');
   barchartfirst.classList.add('hide-mid')
    barchartsecond.classList.add('hide-mid');
    barchartthird.classList.add('hide-mid');
    barchartfourth.classList.remove('hide-mid')
})

showDaybtn.addEventListener('click',function(){
    showDaybtn.classList.add('fr-hover')
    showMonthbtn.classList.remove('fr-hover')
    showWeekbtn.classList.remove('fr-hover')
    showDayclass.classList.remove('hide-day')
    showWeekclass.classList.add('hide-week')
    showMonthclass.classList.add('hide-month')
    
})
showMonthbtn.addEventListener('click',function(){
    showMonthbtn.classList.add('fr-hover')
    showDaybtn.classList.remove('fr-hover')
    showWeekbtn.classList.remove('fr-hover')
    showMonthclass.classList.remove('hide-month')
    showDayclass.classList.add('hide-day')
    showWeekclass.classList.add('hide-week')
})
showWeekbtn.addEventListener('click',function(){
    showMonthbtn.classList.remove('fr-hover')
    showDaybtn.classList.remove('fr-hover')
    showWeekbtn.classList.add('fr-hover')
    showMonthclass.classList.add('hide-month')
    showDayclass.classList.add('hide-day')
    showWeekclass.classList.remove('hide-week')
})


searchElement.addEventListener('click',function(){
    console.log("clicked");
    element.classList.remove('search-class-hidden')
    bodybtn.classList.add('body-flow')
    toggle.classList.add('bgc-show')
    element.classList.add('search-class')
    element.classList.add('fadein')
})

closebtn.addEventListener('click',function(e){
    e.stopPropagation();
    
    element.classList.add('fadeout')
   
    element.addEventListener('animationend',function(){
        element.classList.remove('search-class')
         element.classList.add('search-class-hidden')
         element.classList.remove('fadeout')
         bodybtn.classList.remove('body-flow')
         toggle.classList.remove('bgc-show')
    },{once:true})
    
})
chaticon.addEventListener('click',function(){
    chatele.classList.remove('chat-class-hidden');
    chatele.classList.add('leftin')
    bodybtn.classList.add('body-flow')
    chatele.classList.add('chat-class')
    toggle.classList.add('bgc-show')
})

chatclosebtn.addEventListener('click',function(e){
    e.stopPropagation();

    chatele.classList.add('rightin')

    chatele.addEventListener('animationend',function(){
    chatele.classList.remove('chat-class')
    bodybtn.classList.remove('body-flow')
    toggle.classList.remove('bgc-show')
    chatele.classList.add('chat-class-hidden')
    chatele.classList.remove('rightin')
    },{once:true})

})

const opensidebar=document.getElementById('open-sidebar')
const sidebarelement=document.getElementById('sidebar-section');
const closesidebar=document.getElementById('close-sidebar')

opensidebar.addEventListener('click',function(){
    sidebarelement.classList.remove('sidebar-hidden')
    sidebarelement.classList.add('leftin')
    bodybtn.classList.add('body-flow')
    toggle.classList.add('bgc-show')
    sidebarelement.classList.add('sidebar-show')
})

closesidebar.addEventListener('click',function(e){
    e.stopPropagation();
    sidebarelement.classList.add('rightin');
    sidebarelement.addEventListener('animationend',function(){
        sidebarelement.classList.remove('sidebar-show')
        sidebarelement.classList.add('sidebar-hidden')
        bodybtn.classList.remove('body-flow')
        toggle.classList.remove('bgc-show')
        sidebarelement.classList.remove('rightin')
    },{once:true})
})

const options = {
    chart: {
      type: 'donut', 
      height: 200,   
    },
    series: [44, 55, 41], 
    labels: ['Team A', 'Team B', 'Team C'], 
    colors: ['#008FFB', '#00E396', '#FEB019'], 
    legend:true,
    responsive: [
      {
        breakpoint: 480, 
        options: {
          chart: {
            width: 250,
          },
          legend: false,
        },
      },
    ],
  };
  
 
  const chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
  


  const option_first =  {
    chart: {
      type: 'bar',
      height: 300,
      width:400
    },
    series: [{
      name: 'Value',
      data: [40, 10, 30, 20, 60, 50] 
    }],
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val.toFixed(0); 
        }
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '20%', 
        borderRadius: 5,    
      }
    },
    colors: ['#00E396'], 
    grid: {
      show: true
    },
    dataLabels: {
      enabled: false 
    }
  };
  
 
const barChartfirst = new ApexCharts(document.querySelector("#bar-chart-1"), option_first);
barChartfirst.render();

const option_second =  {
    chart: {
      type: 'bar',
      height: 300,
      width:500
    },
    series: [{
      name: 'Value',
      data: [40, 10, 30, 20, 60, 50] 
    }],
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val.toFixed(0); 
        }
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '20%', 
        borderRadius: 5,    
      }
    },
    colors: ['#00E396'], 
    grid: {
      show: true
    },
    dataLabels: {
      enabled: false 
    }
  };
  
 
const barChartsecond = new ApexCharts(document.querySelector("#bar-chart-2"), option_second);
barChartsecond.render();

const option_third =  {
    chart: {
      type: 'bar',
      height: 300,
      width:500
    },
    series: [{
      name: 'Value',
      data: [40, 10, 30, 20, 60, 50] 
    }],
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val.toFixed(0); 
        }
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '20%', 
        borderRadius: 5,    
      }
    },
    colors: ['#00E396'], 
    grid: {
      show: true
    },
    dataLabels: {
      enabled: false 
    }
  };
  
 
const barChartthird = new ApexCharts(document.querySelector("#bar-chart-3"), option_third);
barChartthird.render();

const option_fourth =  {
    chart: {
      type: 'bar',
      height: 300,
      width:500
    },
    series: [{
      name: 'Value',
      data: [20,30,70,40,10,45] 
    }],
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val.toFixed(0); 
        }
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '20%', 
        borderRadius: 5,    
      }
    },
    colors: ['#00E396'], 
    grid: {
      show: true
    },
    dataLabels: {
      enabled: false 
    }
  };
  
 
const barChartfourth = new ApexCharts(document.querySelector("#bar-chart-4"), option_fourth);
barChartfourth.render();




  