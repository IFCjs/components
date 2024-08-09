import"./web-ifc-api-cV7FPlIA.js";import{S as g}from"./stats.min-BpIepu9J.js";import{m as f,t as m,a as u}from"./index-TmOv0r_5.js";import{p as w,C as y,O as h,a as R,H as x,u as I,R as L,c as O,K as S}from"./index-BkOJFY0w.js";const U=document.getElementById("container"),n=new w,k=n.get(y),t=k.create();t.scene=new h(n);t.renderer=new R(n,U);t.camera=new x(n);n.init();t.camera.controls.setLookAt(12,6,8,0,0,-10);t.scene.setup();const v=n.get(I);v.create(t);t.scene.three.background=null;const b=n.get(L);await b.setup();const P=await fetch("https://thatopen.github.io/engine_components/resources/small.ifc"),j=await P.arrayBuffer(),A=new Uint8Array(j),e=await b.load(A);t.scene.three.add(e);const o=n.get(O);await o.process(e);const p=o.getEntityRelations(e,6518,"IsDefinedBy");if(p)for(const s of p){const c=await e.getProperties(s);console.log(c),await S.getPsetProps(e,s,async l=>{const a=await e.getProperties(l);console.log(a)})}const C=(s,c)=>{const l=new File([s],c),a=document.createElement("a");a.href=URL.createObjectURL(l),a.download=l.name,a.click(),URL.revokeObjectURL(a.href)},B=o.serializeModelRelations(e);console.log(B);const E=o.serializeAllRelations();delete o.relationMaps[e.uuid];const F=await fetch("https://thatopen.github.io/engine_components/resources/small-relations.json"),M=o.getRelationsMapFromJSON(await F.text());o.setRelationMap(e,M);const d=o.getEntityRelations(e,6518,"ContainedInStructure");if(d&&d[0]){const s=await e.getProperties(d[0]);console.log(s)}const i=new g;i.showPanel(2);document.body.append(i.dom);i.dom.style.left="0px";i.dom.style.zIndex="unset";t.renderer.onBeforeUpdate.add(()=>i.begin());t.renderer.onAfterUpdate.add(()=>i.end());f.init();const r=m.create(()=>u`
  <bim-panel active label="IFC Relations Indexer Tutorial" class="options-menu">
  <bim-panel-section collapsed label="Controls">
      <bim-panel-section style="padding-top: 10px;">
      
        <bim-button 
          label="Download relations" 
          @click="${async()=>{C(E,"relations-index-all.json")}}">  
        </bim-button>        

      </bim-panel-section>
    </bim-panel>
    `);document.body.append(r);const z=m.create(()=>u`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{r.classList.contains("options-menu-visible")?r.classList.remove("options-menu-visible"):r.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(z);
