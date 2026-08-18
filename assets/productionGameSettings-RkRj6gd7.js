import{g as f,d as y,s as S,G as b,D as g}from"./index-6o0Ypjw_.js";const u={day1:"1日目",day2:"2日目",day3:"3日目",day4:"4日目",day5:"5日目",day5Complete:"5日目終了"};function L(i){const t=i.elements.namedItem("dayDuration"),e=i.elements.namedItem("userScreenLock"),s=t instanceof HTMLInputElement?t.value.trim():"",a=s===""||s==="-"?null:Number(s);if(a!==null&&(!Number.isFinite(a)||a<1||a>60))return;const n=e instanceof HTMLSelectElement?e.value:g.userScreenLock;if(n in u)return{version:1,dayDurationMinutes:a,userScreenLock:n}}function p(i,t){const e=i.elements.namedItem("dayDuration"),s=i.elements.namedItem("userScreenLock");e instanceof HTMLInputElement&&(e.value=t.dayDurationMinutes===null?"":String(t.dayDurationMinutes)),s instanceof HTMLSelectElement&&(s.value=t.userScreenLock)}async function E(i){var d;i.replaceChildren();const t=document.createElement("main");t.className="production-settings-shell",t.innerHTML=`<section class="production-settings-card" aria-labelledby="production-settings-title">
    <p class="production-settings-kicker">BUG PLUS / GAME ADMIN</p>
    <h1 id="production-settings-title">ゲーム設定</h1>
    <p class="production-settings-description">保存した値は、次にゲームを開くすべてのユーザーに適用されます。</p>
    <form class="production-settings-form">
      <label>1日のゲーム内時間（現実時間・分）
        <input name="dayDuration" type="text" inputmode="decimal" autocomplete="off" placeholder="空欄で無制限">
      </label>
      <p class="production-settings-hint">1〜60分。空欄では自動終業しません。</p>
      <label>ユーザー画面のロック設定
        <select name="userScreenLock">${Object.entries(u).map(([r,o])=>`<option value="${r}">${o}</option>`).join("")}</select>
      </label>
      <p class="production-settings-hint">ユーザーのセーブを削除せず、ゲーム画面を選択した段階へ固定します。</p>
      <label>管理トークン
        <input name="adminToken" type="password" autocomplete="off" placeholder="保存には管理トークンが必要です">
      </label>
      <p class="production-settings-hint">この端末には保存されません。</p>
      <div class="production-settings-actions">
        <button type="button" data-back>ゲームへ戻る</button>
        <button class="is-primary" type="submit">共有設定を保存</button>
      </div>
      <a class="production-settings-admin-link" href="?bugAdmin=1">不具合報告データベースを開く</a>
      <p class="production-settings-status" role="status" aria-live="polite"></p>
    </form>
  </section>`,i.appendChild(t);const e=t.querySelector("form"),s=t.querySelector(".production-settings-status"),a=e==null?void 0:e.querySelector('button[type="submit"]'),n=(r,o="info")=>{s instanceof HTMLElement&&(s.textContent=r,s.dataset.kind=o)};if(!(e instanceof HTMLFormElement))return;if((d=t.querySelector("[data-back]"))==null||d.addEventListener("click",()=>{window.location.href="./"}),!await f())n("設定サービスのURLが未設定です。公開設定を確認してください。","error");else{n("共有設定を読み込んでいます...");try{p(e,await y()),n("現在の共有設定を読み込みました。")}catch{n("共有設定を読み込めません。接続を確認してください。","error")}}e.addEventListener("submit",async r=>{r.preventDefault();const o=L(e);if(!o){n("1〜60の数値、-、または空欄を指定してください。","error");return}const l=e.elements.namedItem("adminToken"),m=l instanceof HTMLInputElement?l.value:"";a instanceof HTMLButtonElement&&(a.disabled=!0),n("共有設定を保存しています...");try{const c=await S(o,m);p(e,c),l instanceof HTMLInputElement&&(l.value=""),n(`保存しました。現在の表示段階: ${u[c.userScreenLock]}`,"success")}catch(c){n(c instanceof b?c.message:"共有設定を保存できません。","error")}finally{a instanceof HTMLButtonElement&&(a.disabled=!1)}})}export{E as mountProductionGameSettings};
