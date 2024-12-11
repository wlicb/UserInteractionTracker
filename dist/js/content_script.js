(()=>{"use strict";(()=>{const e=HTMLElement.prototype.addEventListener;console.log("start"),HTMLElement.prototype.addEventListener=function(t,o,n){if(o)return console.log(`[Monkey Patch] Adding listener on element ${this.tagName} for type: ${t}`),e.call(this,t,o,n)}})(),new MutationObserver((e=>{for(const t of e)"childList"===t.type&&t.addedNodes.forEach((e=>{e instanceof HTMLElement&&(console.log("[MutationObserver] Node added:",e.tagName),e.addEventListener("click",(e=>{console.log("[Monkey Patch] Click intercepted:",e.target)})))}))})).observe(document.body,{childList:!0,subtree:!0})})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudF9zY3JpcHQuanMiLCJtYXBwaW5ncyI6Im1CQUNBLE1BQ0ksTUFBTUEsRUFBMkJDLFlBQVlDLFVBQVVDLGlCQUN2REMsUUFBUUMsSUFBSSxTQUNaSixZQUFZQyxVQUFVQyxpQkFBbUIsU0FBVUcsRUFBTUMsRUFBVUMsR0FDL0QsR0FBSUQsRUFFQSxPQURBSCxRQUFRQyxJQUFJLDZDQUE2Q0ksS0FBS0MscUJBQXFCSixLQUM1RU4sRUFBeUJXLEtBQUtGLEtBQU1ILEVBQU1DLEVBQVVDLEVBRW5FLENBQ0gsRUFURCxHQVdxQixJQUFJSSxrQkFBa0JDLElBQ25DLElBQUssTUFBTUMsS0FBWUQsRUFDRyxjQUFsQkMsRUFBU1IsTUFDVFEsRUFBU0MsV0FBV0MsU0FBU0MsSUFDckJBLGFBQWdCaEIsY0FDaEJHLFFBQVFDLElBQUksaUNBQWtDWSxFQUFLUCxTQUVuRE8sRUFBS2QsaUJBQWlCLFNBQVVlLElBQzVCZCxRQUFRQyxJQUFJLG9DQUFxQ2EsRUFBTUMsT0FBTyxJQUV0RSxHQUdaLElBRUtDLFFBQVFDLFNBQVNDLEtBQU0sQ0FDNUJDLFdBQVcsRUFDWEMsU0FBUyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvY29udGVudF9zY3JpcHRfdGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbigoKSA9PiB7XG4gICAgY29uc3Qgb3JpZ2luYWxBZGRFdmVudExpc3RlbmVyID0gSFRNTEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI7XG4gICAgY29uc29sZS5sb2coJ3N0YXJ0Jyk7XG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgW01vbmtleSBQYXRjaF0gQWRkaW5nIGxpc3RlbmVyIG9uIGVsZW1lbnQgJHt0aGlzLnRhZ05hbWV9IGZvciB0eXBlOiAke3R5cGV9YCk7XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxBZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfTtcbn0pKCk7XG4oKCkgPT4ge1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdjaGlsZExpc3QnKSB7XG4gICAgICAgICAgICAgICAgbXV0YXRpb24uYWRkZWROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTXV0YXRpb25PYnNlcnZlcl0gTm9kZSBhZGRlZDonLCBub2RlLnRhZ05hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Yqo5oCB55uR5ZCs57uR5a6a6KGM5Li6XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIENsaWNrIGludGVyY2VwdGVkOicsIGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7XG4gICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICB9KTtcbn0pKCk7XG4iXSwibmFtZXMiOlsib3JpZ2luYWxBZGRFdmVudExpc3RlbmVyIiwiSFRNTEVsZW1lbnQiLCJwcm90b3R5cGUiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJsaXN0ZW5lciIsIm9wdGlvbnMiLCJ0aGlzIiwidGFnTmFtZSIsImNhbGwiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwibXV0YXRpb24iLCJhZGRlZE5vZGVzIiwiZm9yRWFjaCIsIm5vZGUiLCJldmVudCIsInRhcmdldCIsIm9ic2VydmUiLCJkb2N1bWVudCIsImJvZHkiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIl0sInNvdXJjZVJvb3QiOiIifQ==