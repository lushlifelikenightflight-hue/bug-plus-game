import{m as h,n as v,o as g,G as S,p as I}from"./index-CAAgqFjU.js";import{m as M,a as m,c as y}from"./adminSession-DDu3N0zU.js";const f={progressive:"日数に応じて解放",all:"最初から全エリア解放"};function k(t){const a=t.elements.namedItem("dayDuration"),o=t.elements.namedItem("roomUnlockMode"),e=t.elements.namedItem("continuationScoreThreshold"),i=t.elements.namedItem("slackPostInterval"),s=a instanceof HTMLInputElement?a.value.trim():"",n=s===""||s==="-"?null:Number(s);if(n!==null&&(!Number.isFinite(n)||n<1||n>60))return;const p=o instanceof HTMLSelectElement?o.value:I.roomUnlockMode;if(!(p in f))return;const r=e instanceof HTMLInputElement?Number(e.value):Number.NaN;if(!Number.isFinite(r)||r<0||r>1e8)return;const l=i instanceof HTMLInputElement?Number(i.value):Number.NaN;if(!(!Number.isInteger(l)||l<1||l>120))return{version:1,dayDurationMinutes:n,roomUnlockMode:p,continuationScoreThreshold:Math.trunc(r),slackPostIntervalMinutes:l}}function b(t,a){const o=t.elements.namedItem("dayDuration"),e=t.elements.namedItem("roomUnlockMode"),i=t.elements.namedItem("continuationScoreThreshold"),s=t.elements.namedItem("slackPostInterval");o instanceof HTMLInputElement&&(o.value=a.dayDurationMinutes===null?"":String(a.dayDurationMinutes)),e instanceof HTMLSelectElement&&(e.value=a.roomUnlockMode),i instanceof HTMLInputElement&&(i.value=String(a.continuationScoreThreshold)),s instanceof HTMLInputElement&&(s.value=String(a.slackPostIntervalMinutes))}async function U(t){await M(t,"ゲーム内設定",async a=>E(t,a))}async function E(t,a){var r,l;t.replaceChildren();const o=document.createElement("main");o.className="production-settings-shell",o.innerHTML=`<section class="production-settings-card" aria-labelledby="production-settings-title">
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
      <label>エリア解放設定 ※必須
        <select name="roomUnlockMode" required>${Object.entries(f).map(([u,c])=>`<option value="${u}">${c}</option>`).join("")}</select>
      </label>
      <p class="production-settings-hint">「日数に応じて解放」ではゲーム進行に合わせて入れる部屋が増えます。「最初から全エリア解放」ではNEW GAMEの1日目から全室へ移動できます。どちらも日付は通常どおり進みます。</p>
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
  </section>`,t.appendChild(o);const e=o.querySelector("form"),i=o.querySelector(".production-settings-status"),s=e==null?void 0:e.querySelector('button[type="submit"]'),n=(u,c="info")=>{i instanceof HTMLElement&&(i.textContent=u,i.dataset.kind=c)};if(!(e instanceof HTMLFormElement))return;if((r=o.querySelector("[data-back]"))==null||r.addEventListener("click",()=>{window.location.href="./"}),(l=o.querySelector("[data-logout]"))==null||l.addEventListener("click",()=>{y(),window.location.href=m("gameSettings")}),!await h())n("設定サービスのURLが未設定です。公開設定を確認してください。","error");else{n("共有設定を読み込んでいます...");try{b(e,await v()),n("現在の共有設定を読み込みました。")}catch{n("共有設定を読み込めません。接続を確認してください。","error")}}e.addEventListener("submit",async u=>{u.preventDefault();const c=k(e);if(!c){n("1日の時間は1〜60または空欄、続編条件は0〜100,000,000、Slack間隔は1〜120分で指定してください。","error");return}s instanceof HTMLButtonElement&&(s.disabled=!0),n("共有設定を保存しています...");try{const d=await g(c,a);b(e,d),n(`保存しました。エリア解放設定: ${f[d.roomUnlockMode]}`,"success")}catch(d){n(d instanceof S?d.message:"共有設定を保存できません。","error")}finally{s instanceof HTMLButtonElement&&(s.disabled=!1)}})}export{U as mountProductionGameSettings};
