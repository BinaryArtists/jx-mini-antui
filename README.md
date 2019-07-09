# 组件使用

### dialog

*page.json*
```
{
  "defaultTitle": "活动成员",
  "usingComponents": {
    "member-card": "/components/member-card/member-card",
    "member-grid": "/components/member-grid/index",
    "dialog": "@ali/alisports-components/dist/dialog/dialog"
  }
}
```

*page.axml*
```
<dialog
  show="{{delDialog.show}}"
  title="{{delDialog.title}}" 
  buttons="{{delDialog.buttons}}" 
  data="{{delDialog.data}}"
  onButtonClicked="onMemberDelConfirmed"
  >
  <text>确认将</text><text style="color:#CD162C;margin-left:10rpx;margin-right:10rpx;"> {{delDialog.username}} </text><text>移除本次活动吗？移除后退款将在24小时内原路退回至成员账户</text>    
</dialog>
```

### comfirm

*page.json*
```
{
  "defaultTitle": "修改团子信息",
  "usingComponents": {
    "confirm-popup": "@ali/alisports-components/dist/confirm/confirm"
  }
}
```

*page.axml*
```
<confirm-popup show="{{showConfirmPopup}}" title="提示" btns="{{confirmBtns}}" onBtnClick="onConfirmPopupBtnClick" onClose="onCloseConfirmPopup">
    <text>{{confirmMsg}}
    </text>
</confirm-popup>

<confirm-popup show="{{showSuccessPopup}}" title="创建活动成功" btns="{{successBtns}}" onBtnClick="onSuccessPopupBtnClick" onClose="onCloseSuccessPopup">
  <view class="success-popup-content">
    <image src="/images/activity_created.webp" mode="aspectFit" class="img"/>
    <view class="msg">
      <view class="msg-container" a:if="{{clubCreateResult.club_auto_created}}">
        <text>提示：活动需要从属于某一个团子\n已为您自动创建</text>
        <view class="link-btn" onTap="toClub">
          <text>查看团子</text>
          <view class="arrow-primary" aria-hidden="true" />
        </view>
      </view>
      <block a:else>提示：此活动归属于您的”
        <text class="club-name">{{clubCreateResult.club_name}}
        </text>“团子
      </block>
    </view>
  </view>
</confirm-popup>
```
