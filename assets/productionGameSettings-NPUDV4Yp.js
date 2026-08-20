import{k as S,m as h,n as v,G as y,o as g}from"./index-vPTGrZCB.js";import{m as I,a as m,c as k}from"./adminSession-BQ6rZ4kk.js";const f={day1:"1日目",day2:"2日目",day3:"3日目",day4:"4日目",day5:"5日目",day5Complete:"5日目終了"};function L(e){const s=e.elements.namedItem("dayDuration"),a=e.elements.namedItem("userScreenLock"),t=e.elements.namedItem("continuationScoreThreshold"),o=e.elements.namedItem("slackPostInterval"),i=s instanceof HTMLInputElement?s.value.trim():"",n=i===""||i==="-"?null:Number(i);if(n!==null&&(!Number.isFinite(n)||n<1||n>60))return;const p=a instanceof HTMLSelectElement?a.value:g.userScreenLock;if(!(p in f))return;const r=t instanceof HTMLInputElement?Number(t.value):Number.NaN;if(!Number.isFinite(r)||r<0||r>1e8)return;const c=o instanceof HTMLInputElement?Number(o.value):Number.NaN;if(!(!Number.isInteger(c)||c<1||c>120))return{version:1,dayDurationMinutes:n,userScreenLock:p,continuationScoreThreshold:Math.trunc(r),slackPostIntervalMinutes:c}}function b(e,s){const a=e.elements.namedItem("dayDuration"),t=e.elements.namedItem("userScreenLock"),o=e.elements.namedItem("continuationScoreThreshold"),i=e.elements.namedItem("slackPostInterval");a instanceof HTMLInputElement&&(a.value=s.dayDurationMinutes===null?"":String(s.dayDurationMinutes)),t instanceof HTMLSelectElement&&(t.value=s.userScreenLock),o instanceof HTMLInputElement&&(o.value=String(s.continuationScoreThreshold)),i instanceof HTMLInputElement&&(i.value=String(s.slackPostIntervalMinutes))}async function N(e){await I(e,"ゲーム内設定",async s=>E(e,s))}async function E(e,s){var r,c;e.replaceChildren();const a=document.createElement("main");a.className="production-settings-shell",a.innerHTML=`<section class="production-settings-card" aria-labelledby="production-settings-title">
    <p class="production-settings-kicker">BUG PLUS / GAME ADMIN</p>
    <h1 id="production-settings-title">ゲーム内設定</h1>
    <nav class="production-settings-admin-nav" aria-label="管理画面">
      <a href="${m("worldEditor")}">ゲームデザイン</a>
      <a href="${m("bugAdmin")}">不具合報告データベース</a>
      <a href="${m("glossaryAdmin")}">不具合用語データベース</a>
      <button type="button" data-logout>ログアウト</button>
    </nav>
    <p class="production-settings-description">保存した値は、次にゲームを開くすべてのユーザーに適用されます。</p>
    <form class="production-settings-form">
      <label>1日のゲーム内時間（現実時間・分）
        <input name="dayDuration" type="text" inputmode="decimal" autocomplete="off" placeholder="空欄で無制限">
      </label>
      <p class="production-settings-hint">1〜60分。空欄では自動終業しません。</p>
      <label>ユーザー画面のロック設定
        <select name="userScreenLock">${Object.entries(f).map(([u,l])=>`<option value="${u}">${l}</option>`).join("")}</select>
      </label>
      <p class="production-settings-hint">ユーザーのセーブを削除せず、ゲーム画面を選択した段階へ固定します。</p>
      <label>5日目 続編イベントの累計スコア条件
        <input name="continuationScoreThreshold" type="number" min="0" max="100000000" step="1" value="100000" required>
      </label>
      <p class="production-settings-hint">既定値は100,000。0にするとすべてのプレイヤーに表示します。</p>
      <label>Slack投稿間隔（ゲーム内時間・分）
        <input name="slackPostInterval" type="number" min="1" max="120" step="1" value="30" required>
      </label>
      <p class="production-settings-hint">1〜120分、既定30分。#新入社員歓迎を除き、不具合報告で招待された各チャンネルへこの間隔で1スレッドずつ投稿します。変更後は次の時計更新から新しい間隔で再予約します。</p>
      <div class="production-settings-actions">
        <button type="button" data-back>ゲームへ戻る</button>
        <button class="is-primary" type="submit">共有設定を保存</button>
      </div>
      <p class="production-settings-status" role="status" aria-live="polite"></p>
    </form>
  </section>`,e.appendChild(a);const t=a.querySelector("form"),o=a.querySelector(".production-settings-status"),i=t==null?void 0:t.querySelector('button[type="submit"]'),n=(u,l="info")=>{o instanceof HTMLElement&&(o.textContent=u,o.dataset.kind=l)};if(!(t instanceof HTMLFormElement))return;if((r=a.querySelector("[data-back]"))==null||r.addEventListener("click",()=>{window.location.href="./"}),(c=a.querySelector("[data-logout]"))==null||c.addEventListener("click",()=>{k(),window.location.href=m("gameSettings")}),!await S())n("設定サービスのURLが未設定です。公開設定を確認してください。","error");else{n("共有設定を読み込んでいます...");try{b(t,await h()),n("現在の共有設定を読み込みました。")}catch{n("共有設定を読み込めません。接続を確認してください。","error")}}t.addEventListener("submit",async u=>{u.preventDefault();const l=L(t);if(!l){n("1日の時間は1〜60または空欄、続編条件は0〜100,000,000、Slack間隔は1〜120分で指定してください。","error");return}i instanceof HTMLButtonElement&&(i.disabled=!0),n("共有設定を保存しています...");try{const d=await v(l,s);b(t,d),n(`保存しました。現在の表示段階: ${f[d.userScreenLock]}`,"success")}catch(d){n(d instanceof y?d.message:"共有設定を保存できません。","error")}finally{i instanceof HTMLButtonElement&&(i.disabled=!1)}})}export{N as mountProductionGameSettings};
