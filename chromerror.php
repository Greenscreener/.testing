<div id="main-frame-error" class="interstitial-wrapper" jstcache="0">
    <div id="main-content" jstcache="0">
      <div class="icon icon-offline" jseval="updateIconClass(this.classList, iconClass)" jstcache="3" style="visibility: hidden;"></div>
      <div id="main-message" jstcache="0">
        <h1 jsselect="heading" jsvalues=".innerHTML:msg" jstcache="7">Připojení k&nbsp;internetu není k&nbsp;dispozici</h1>
        <p jsselect="summary" jsvalues=".innerHTML:msg" jstcache="8">Váš počítač je offline.</p>
        <div id="suggestions-list" jsdisplay="(suggestionsSummaryList &amp;&amp; suggestionsSummaryList.length)" jstcache="9">
          <p jsvalues=".innerHTML:suggestionsSummaryListHeader" jstcache="16">Zkuste:</p>
          <ul jsvalues=".className:suggestionsSummaryList.length == 1 ? 'single-suggestion' : ''" jstcache="17" class="">
            <li jsselect="suggestionsSummaryList" jsvalues=".innerHTML:summary" jstcache="18" jsinstance="0">Zkontrolovat síťový kabel nebo směrovač</li><li jsselect="suggestionsSummaryList" jsvalues=".innerHTML:summary" jstcache="18" jsinstance="1">Resetovat modem nebo směrovač</li><li jsselect="suggestionsSummaryList" jsvalues=".innerHTML:summary" jstcache="18" jsinstance="*2">Obnovit připojení k&nbsp;síti Wi-Fi</li>
          </ul>
        </div>
        <div class="error-code" jscontent="errorCode" jstcache="10">ERR_INTERNET_DISCONNECTED</div>
      </div>
    </div>
    <div id="buttons" class="nav-wrapper suggested-right" jstcache="0">
      <div id="control-buttons" hidden="" jstcache="0">
        
        <button id="reload-button" class="blue-button text-button" onclick="trackClick(this.trackingId);
                     reloadButtonClick(this.url);" jsselect="reloadButton" jsvalues=".url:reloadUrl; .trackingId:reloadTrackingId" jscontent="msg" jstcache="11" style="display: none;"></button><button id="show-saved-copy-button" class="blue-button text-button" onclick="showSavedCopyButtonClick()" jsselect="showSavedCopyButton" jscontent="msg" jsvalues="title:title; .primary:primary" jstcache="12" style="display: none;">
        </button>
        <button id="show-offline-pages-button" class="gray-button text-button" onclick="showOfflinePagesButtonClick()" jsselect="showOfflinePagesButton" jscontent="msg" jstcache="13" style="display: none;">
        </button>
      </div>
      <button id="details-button" class="text-button small-link singular" onclick="detailsButtonClick(); toggleHelpBox()" jscontent="details" jsdisplay="(suggestionsDetails &amp;&amp; suggestionsDetails.length > 0) || diagnose" jsvalues=".detailsText:details; .hideDetailsText:hideDetails;" jstcache="4" style="display: none;"></button>
    </div>
    <div id="details" class="hidden" jstcache="0">
      <div class="suggestions" jsselect="suggestionsDetails" jstcache="5" jsinstance="*0" style="display: none;">
        <div class="suggestion-header" jsvalues=".innerHTML:header" jstcache="14"></div>
        <div class="suggestion-body" jsvalues=".innerHTML:body" jstcache="15"></div>
      </div>
      <button class="text-button" id="diagnose-button" onclick="diagnoseErrors()" jscontent="diagnose" jsdisplay="diagnose" jstcache="6" style="display: none;"></button>
      <div id="diagnose-frame" class="hidden" jstcache="0"></div>
    </div>
  <div class="runner-container"><canvas class="runner-canvas" width="369" height="150" style="width: 369px; height: 150px;"></canvas></div></div>