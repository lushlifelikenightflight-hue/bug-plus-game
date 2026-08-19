import{g as y,e as S,s as g,G as b,D as L}from"./index-B3nycVXU.js";import{m as v,a as u,c as h}from"./adminSession-cXMvlcBc.js";const d={day1:"1日目",day2:"2日目",day3:"3日目",day4:"4日目",day5:"5日目",day5Complete:"5日目終了"};function E(n){const a=n.elements.namedItem("dayDuration"),e=n.elements.namedItem("userScreenLock"),t=a instanceof HTMLInputElement?a.value.trim():"",s=t===""||t==="-"?null:Number(t);if(s!==null&&(!Number.isFinite(s)||s<1||s>60))return;const o=e instanceof HTMLSelectElement?e.value:L.userScreenLock;if(o in d)return{version:1,dayDurationMinutes:s,userScreenLock:o}}function f(n,a){const e=n.elements.namedItem("dayDuration"),t=n.elements.namedItem("userScreenLock");e instanceof HTMLInputElement&&(e.value=a.dayDurationMinutes===null?"":String(a.dayDurationMinutes)),t instanceof HTMLSelectElement&&(t.value=a.userScreenLock)}async function D(n){await v(n,"ゲーム内設定",async a=>k(n,a))}async function k(n,a){var m,p;n.replaceChildren();const e=document.createElement("main");e.className="production-settings-shell",e.innerHTML=`<section class="production-settings-card" aria-labelledby="production-settings-title">
    <p class="production-settings-kicker">BUG PLUS / GAME ADMIN</p>
    <h1 id="production-settings-title">ゲーム内設定</h1>
    <nav class="production-settings-admin-nav" aria-label="管理画面">
      <a href="${u("worldEditor")}">ゲームデザイン</a>
      <a href="${u("bugAdmin")}">不具合報告データベース</a>
      <button type="button" data-logout>ログアウト</button>
    </nav>
    <p class="production-settings-description">保存した値は、次にゲームを開くすべてのユーザーに適用されます。</p>
    <form class="production-settings-form">
      <label>1日のゲーム内時間（現実時間・分）
        <input name="dayDuration" type="text" inputmode="decimal" autocomplete="off" placeholder="空欄で無制限">
      </label>
      <p class="production-settings-hint">1〜60分。空欄では自動終業しません。</p>
      <label>ユーザー画面のロック設定
        <select name="userScreenLock">${Object.entries(d).map(([c,r])=>`<option value="${c}">${r}</option>`).join("")}</select>
      </label>
      <p class="production-settings-hint">ユーザーのセーブを削除せず、ゲーム画面を選択した段階へ固定します。</p>
      <div class="production-settings-actions">
        <button type="button" data-back>ゲームへ戻る</button>
        <button class="is-primary" type="submit">共有設定を保存</button>
      </div>
      <p class="production-settings-status" role="status" aria-live="polite"></p>
    </form>
  </section>`,n.appendChild(e);const t=e.querySelector("form"),s=e.querySelector(".production-settings-status"),o=t==null?void 0:t.querySelector('button[type="submit"]'),i=(c,r="info")=>{s instanceof HTMLElement&&(s.textContent=c,s.dataset.kind=r)};if(!(t instanceof HTMLFormElement))return;if((m=e.querySelector("[data-back]"))==null||m.addEventListener("click",()=>{window.location.href="./"}),(p=e.querySelector("[data-logout]"))==null||p.addEventListener("click",()=>{h(),window.location.href=u("gameSettings")}),!await y())i("設定サービスのURLが未設定です。公開設定を確認してください。","error");else{i("共有設定を読み込んでいます...");try{f(t,await S()),i("現在の共有設定を読み込みました。")}catch{i("共有設定を読み込めません。接続を確認してください。","error")}}t.addEventListener("submit",async c=>{c.preventDefault();const r=E(t);if(!r){i("1〜60の数値、-、または空欄を指定してください。","error");return}o instanceof HTMLButtonElement&&(o.disabled=!0),i("共有設定を保存しています...");try{const l=await g(r,a);f(t,l),i(`保存しました。現在の表示段階: ${d[l.userScreenLock]}`,"success")}catch(l){i(l instanceof b?l.message:"共有設定を保存できません。","error")}finally{o instanceof HTMLButtonElement&&(o.disabled=!1)}})}export{D as mountProductionGameSettings};
