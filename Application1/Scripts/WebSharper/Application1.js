(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,Html,Client,Operators,List,Attr,Tags,T,Concurrency,Remoting,AjaxRemotingProvider,String,Library1,helpers,EventsPervasives;
 Runtime.Define(Global,{
  Application1:{
   Client:{
    Main:function()
    {
     var input,arg10,x,output,arg101,arg102,x1,arg00,arg103,arg104,arg105;
     arg10=List.ofArray([Attr.Attr().NewAttr("value","")]);
     input=Operators.add(Tags.Tags().NewTag("input",arg10),Runtime.New(T,{
      $:0
     }));
     x=Runtime.New(T,{
      $:0
     });
     output=Tags.Tags().NewTag("h1",x);
     arg102=List.ofArray([Tags.Tags().text("Send")]);
     x1=Tags.Tags().NewTag("button",arg102);
     arg00=function()
     {
      return function()
      {
       return Concurrency.Start(Concurrency.Delay(function()
       {
        return Concurrency.Bind(AjaxRemotingProvider.Async("Application1:0",[input.get_Value()]),function(_arg11)
        {
         output.set_Text(String(helpers.fact1(_arg11<<0)));
         return Concurrency.Return(null);
        });
       }),{
        $:0
       });
      };
     };
     EventsPervasives.Events().OnClick(arg00,x1);
     arg103=Runtime.New(T,{
      $:0
     });
     arg104=List.ofArray([Attr.Attr().NewAttr("class","text-muted")]);
     arg105=List.ofArray([Attr.Attr().NewAttr("class","jumbotron")]);
     arg101=List.ofArray([input,x1,Tags.Tags().NewTag("hr",arg103),Operators.add(Tags.Tags().NewTag("h4",arg104),List.ofArray([Tags.Tags().text("The server responded:")])),Operators.add(Tags.Tags().NewTag("div",arg105),List.ofArray([output]))]);
     return Tags.Tags().NewTag("div",arg101);
    },
    Start:function(input,k)
    {
     var arg00;
     arg00=Concurrency.Delay(function()
     {
      return Concurrency.Bind(AjaxRemotingProvider.Async("Application1:0",[input]),function(_arg1)
      {
       return Concurrency.Return(k(_arg1));
      });
     });
     return Concurrency.Start(arg00,{
      $:0
     });
    }
   }
  }
 });
 Runtime.OnInit(function()
 {
  Html=Runtime.Safe(Global.WebSharper.Html);
  Client=Runtime.Safe(Html.Client);
  Operators=Runtime.Safe(Client.Operators);
  List=Runtime.Safe(Global.WebSharper.List);
  Attr=Runtime.Safe(Client.Attr);
  Tags=Runtime.Safe(Client.Tags);
  T=Runtime.Safe(List.T);
  Concurrency=Runtime.Safe(Global.WebSharper.Concurrency);
  Remoting=Runtime.Safe(Global.WebSharper.Remoting);
  AjaxRemotingProvider=Runtime.Safe(Remoting.AjaxRemotingProvider);
  String=Runtime.Safe(Global.String);
  Library1=Runtime.Safe(Global.Library1);
  helpers=Runtime.Safe(Library1.helpers);
  return EventsPervasives=Runtime.Safe(Client.EventsPervasives);
 });
 Runtime.OnLoad(function()
 {
  return;
 });
}());
