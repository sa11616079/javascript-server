**Introduction :**

_In the modern era, software is commonly delivered as a service: called web apps, or software-as-a-service.It really seems that everyone is building microservices these days. Start-ups, big Internet companies, the enterprise. There is a good chance that no matter where you work, if you are a backend developer, you will encounter microservices architecture or be asked to design one. The Internet is full of advice and opinion about how this should be done. Some of it is very specific to certain styles- Serverless, .Net, Node etc. and often may be related to very specific issues. What I found difficult is to find universal truths and practical advice that could be used as a way to evaluate a particular design. The twelve-factor app is a methodology for building software-as-a-service apps_.

**1. Codebase**

_This is pretty fundamental, yet sometimes you can see people breaking this principle. You should not create two different repositories when all you need to do is different setup for production. Of course you can have multiple version of the app deployed, just make sure that their share the codebase. If you don;t know how to deal with multiple versions in a single codebase, I recommend having a look at git-flow_.

**2. Dependencies**

_Thinking about dependencies usually does not go beyond the dependant libraries. As long as you use a standard build tool (npm, yarn, maven, NuGet) you have the basics covered. It is more difficult when it comes to managing dependencies- required database connections, services, etc. It is really beneficial for the speed of development and on-boarding when all that is needed doing is checking out the repository from the source control and running the build_.

**3. Config**

_It is very easy to make a mistake when dealing with the configuration in microservices. In the beginning it is quite simple to just create a few configuration files and load them depending on which environment the service is being executed. Adding new services is then trivial as you don’t need to update all the config in this new service and keep them all manually in sync. This problem is much more common in places where developers and operations are two separate strictly separate groups. Lack of communication, or control leads to the sub-par solution. This can be fixed in your company by implementing more DevOps culture_.

**4. Backing services**

_This is a common practice already and not something that professional developers get wrong often. The idea is that your services should be easily interchangeable. If you are referencing them as simple urls with login credentials there is no reason why they shouldn’t be. This will ensure good portability and helps maintain your system_.

**5. Build, release, run**

_Build - converting code repo into an executable bundle known as the build_.
_Release - getting the build and combining it with a config on a certain environment- ready to run. This is also often referred to as deployment_.
_Run - starting the app in the deployment_
_Separation of these processes is important to make sure that automation and maintaining the system will be as easy as possible. This separation is expected by many modern tools as well_.

**6. Processes**

_This is another factor, that is at the core of microservices architecture. The idea of stateless services, that can be easily scaled by deploying more of them is part of the definition what a microservices are. You should not be introducing state into your services (that should leave in database or memcached, redis - for the session information). Simple, but a crucial consideration when designing your architecture_.

**7. Port binding**

_This is quite simple- make sure that your service is visible to others via port binding (if you need it visible at all, possibly it just consumer from a queue). If you built a service, make sure that other services can treat this as a resource if they wish_.

**8. Concurrency**

_Some may argue that the word micro in the microservices hints at this as well (beside the services being small code-wise). There is a misconception that modern developers don’t need to worry about low level threading considerations. This is wrong, as most services will have multithreading introduced via multiple request being handled simultaneously. This is a large enough topic to warrant its own article_.

**9. Disposability**

_Fast growing company is based on our ideas about scalability and the fact that we decided on microservices. It is important that they can go up and down quickly. Without this, automatic scaling and ease of deployment, development- are being diminished. However, the goal here is to achieve resounding success, not just an acceptable compromise. Graceful shutdowns are arguably more important, as this is about leaving the system in a correct state. The port that was used should be freed so that the new server can be started, any unfinished task should be returned to the queue etc. One last thing… Crashes also need to be handled. These will be the responsibility of the whole system rather than just the service_.

**10. Dev/prod parity**

_It may be even more challenging to achieve this parity than it is with other types of architecture. This is one of the reasons why doing microservices is seen as a challenge. The good news- if you managed to achieve the previous 10 factors, this one should be significantly easier! The common theme reappearing here is the need for developer to work closely with operations. The devops culture is one of the requirements for truly successful microservices_.

**11. Logs**

_It is treat logs as event streams. This factor more than any other is about excellence rather than adequacy. Success is possible without logs as event streams, but you will be missing on a dramatic upside here. Bringing Splunk or Logstash/ELK Stack to help with your logs, can bring dramatic gains. All of these can come from well design logs, treated as event streams and captured by one of these technologies. Don’t miss out on that_

**12. Admin processes**

_This is more about managing your app rather than developing services, but it is still important. Admin tasks should be run from the relevant servers- possibly production servers. This is easiest done by shipping admin code with application code to provide these capabilities. The tools should be there even if they are not part of the standard execution of the service. What we try to do here is to isolate dependencies, as Admin processes and tools required to carry them out are dependencies as well_.