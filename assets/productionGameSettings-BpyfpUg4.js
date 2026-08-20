import{j as h,k as b,m as y,G as g,n as v}from"./index-BejVWPyf.js";import{m as L,a as d,c as E}from"./adminSession-BsUcusDr.js";const m={day1:"1日目",day2:"2日目",day3:"3日目",day4:"4日目",day5:"5日目",day5Complete:"5日目終了"};function T(t){const a=t.elements.namedItem("dayDuration"),n=t.elements.namedItem("userScreenLock"),e=t.elements.namedItem("continuationScoreThreshold"),i=a instanceof HTMLInputElement?a.value.trim():"",o=i===""||i==="-"?null:Number(i);if(o!==null&&(!Number.isFinite(o)||o<1||o>60))return;const s=n instanceof HTMLSelectElement?n.value:v.userScreenLock;if(!(s in m))return;const c=e instanceof HTMLInputElement?Number(e.value):Number.NaN;if(!(!Number.isFinite(c)||c<0||c>1e8))return{version:1,dayDurationMinutes:o,userScreenLock:s,continuationScoreThreshold:Math.trunc(c)}}function S(t,a){const n=t.elements.namedItem("dayDuration"),e=t.elements.namedItem("userScreenLock"),i=t.elements.namedItem("continuationScoreThreshold");n instanceof HTMLInputElement&&(n.value=a.dayDurationMinutes===null?"":String(a.dayDurationMinutes)),e instanceof HTMLSelectElement&&(e.value=a.userScreenLock),i instanceof HTMLInputElement&&(i.value=String(a.continuationScoreThreshold))}async function H(t){await L(t,"ゲーム内設定",async a=>k(t,a))}async function k(t,a){var p,f;t.replaceChildren();const n=document.createElement("main");n.className="production-settings-shell",n.innerHTML=`<section class="production-settings-card" aria-labelledby="production-settings-title">
    <p class="production-settings-kicker">BUG PLUS / GAME ADMIN</p>
    <h1 id="production-settings-title">ゲーム内設定</h1>
    <nav class="production-settings-admin-nav" aria-label="管理画面">
      <a href="${d("worldEditor")}">ゲームデザイン</a>
      <a href="${d("bugAdmin")}">不具合報告データベース</a>
      <a href="${d("glossaryAdmin")}">不具合用語データベース</a>
      <button type="button" data-logout>ログアウト</button>
    </nav>
    <p class="production-settings-description">保存した値は、次にゲームを開くすべてのユーザーに適用されます。</p>
    <form class="production-settings-form">
      <label>1日のゲーム内時間（現実時間・分）
        <input name="dayDuration" type="text" inputmode="decimal" autocomplete="off" placeholder="空欄で無制限">
      </label>
      <p class="production-settings-hint">1〜60分。空欄では自動終業しません。</p>
      <label>ユーザー画面のロック設定
        <select name="userScreenLock">${Object.entries(m).map(([l,r])=>`<option value="${l}">${r}</option>`).join("")}</select>
      </label>
      <p class="production-settings-hint">ユーザーのセーブを削除せず、ゲーム画面を選択した段階へ固定します。</p>
      <label>5日目 続編イベントの累計スコア条件
        <input name="continuationScoreThreshold" type="number" min="0" max="100000000" step="1" value="100000" required>
      </label>
      <p class="production-settings-hint">既定値は100,000。0にするとすべてのプレイヤーに表示します。</p>
      <div class="production-settings-actions">
        <button type="button" data-back>ゲームへ戻る</button>
        <button class="is-primary" type="submit">共有設定を保存</button>
      </div>
      <p class="production-settings-status" role="status" aria-live="polite"></p>
    </form>
  </section>`,t.appendChild(n);const e=n.querySelector("form"),i=n.querySelector(".production-settings-status"),o=e==null?void 0:e.querySelector('button[type="submit"]'),s=(l,r="info")=>{i instanceof HTMLElement&&(i.textContent=l,i.dataset.kind=r)};if(!(e instanceof HTMLFormElement))return;if((p=n.querySelector("[data-back]"))==null||p.addEventListener("click",()=>{window.location.href="./"}),(f=n.querySelector("[data-logout]"))==null||f.addEventListener("click",()=>{E(),window.location.href=d("gameSettings")}),!await h())s("設定サービスのURLが未設定です。公開設定を確認してください。","error");else{s("共有設定を読み込んでいます...");try{S(e,await b()),s("現在の共有設定を読み込みました。")}catch{s("共有設定を読み込めません。接続を確認してください。","error")}}e.addEventListener("submit",async l=>{l.preventDefault();const r=T(e);if(!r){s("時間は1〜60または空欄、続編条件は0〜100,000,000で指定してください。","error");return}o instanceof HTMLButtonElement&&(o.disabled=!0),s("共有設定を保存しています...");try{const u=await y(r,a);S(e,u),s(`保存しました。現在の表示段階: ${m[u.userScreenLock]}`,"success")}catch(u){s(u instanceof g?u.message:"共有設定を保存できません。","error")}finally{o instanceof HTMLButtonElement&&(o.disabled=!1)}})}export{H as mountProductionGameSettings};
