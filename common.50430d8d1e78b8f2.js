"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[592],{4497:(A,o,i)=>{i.d(o,{Z:()=>p});var c=i(6886),h=i(2776),n=i(3034),g=i(6122),s=i(4766),a=i(2671),_=i(2655);let p=(()=>{class r{constructor(t){this.http=t,this.articles=[],this.collectionSize=0,this._articles$=new c.X(this.articles),this._collection$=new c.X(this.collectionSize),this.collectionSize$=this._collection$.asObservable(),this.articles$=this._articles$.asObservable()}getArticles(t){(0,h.D)([this.getArticlesSize(),this.getArticlesByPage(t)],(e,l)=>({collectionSize:e.length,articles:l})).subscribe(e=>{e.collectionSize&&e.articles&&(this._articles$.next(e.articles),this._collection$.next(e.collectionSize))})}searchArticles(t,e){this.http.get(s.N.apiUrl+`blogs?search=${t}&page=1&limit=10`).subscribe(l=>{l&&this._articles$.next(l)})}sortArticles(t){this.http.get(s.N.apiUrl+"blogs?sortby=createdAt&order=desc&page=1&limit=10").subscribe(e=>{e&&this._articles$.next(e)})}getArticleById(t){return this.http.get(s.N.apiUrl+`blogs/${t}`)}addArticle(t){return this.http.post(s.N.apiUrl+"blogs",t)}updateArticle(t){return this.http.post(s.N.apiUrl+"blogs",t)}getArticlesByPage(t){return this.http.get(s.N.apiUrl+`blogs?orderBy=createdA&page=${t}&limit=10`)}getArticlesSize(){return this.http.get(s.N.apiUrl+"blogs?sortBy=createdAt&order=asc")}validateImage(t){return this.http.get(t).pipe((0,n.U)(l=>{})),(0,g.of)(!1)}}return r.\u0275fac=function(t){return new(t||r)(a.LFG(_.eN))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);