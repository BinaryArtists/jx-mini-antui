# 组件使用

### JS 写法注意

```
// 1. No 'const'
// 2. No '{
  func () {}
}'
// 3. No 'data => data'
// 4. No 'let { a } = data'
```

### dialog

*page.json*
```
{
  "defaultTitle": "活动成员",
  "usingComponents": {
    "dialog": "jx-mini-antui/dist/dialog/dialog"
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
  "defaultTitle": "修改信息",
  "usingComponents": {
    "confirm-popup": "jx-mini-antui/dist/confirm/confirm"
  }
}
```

*page.axml*
```
<confirm-popup show="{{showConfirmPopup}}" title="提示" btns="{{confirmBtns}}" onBtnClick="onConfirmPopupBtnClick" onClose="onCloseConfirmPopup">
    <text>{{confirmMsg}}
    </text>
</confirm-popup>

<confirm-popup show="{{showSuccessPopup}}" title="创建成功" btns="{{successBtns}}" onBtnClick="onSuccessPopupBtnClick" onClose="onCloseSuccessPopup">
  <view class="success-popup-content">
    <image src="/images/activity_created.webp" mode="aspectFit" class="img"/>
    <view class="msg">
      <view class="msg-container" a:if="{{clubCreateResult.club_auto_created}}">
        <text>提示：活动需要从属于某一个团子\n已为您自动创建</text>
        <view class="link-btn" onTap="toClub">
          <text>查看</text>
          <view class="arrow-primary" aria-hidden="true" />
        </view>
      </view>
      <block a:else>提示：此活动归属于您的”
        <text class="club-name">{{clubCreateResult.club_name}}
        </text>...
      </block>
    </view>
  </view>
</confirm-popup>
```

### filter 

```css

.filter-bar {
  position: sticky; // 顶部停靠
  margin-top: 0rpx;
  background-color: #EBEBEB;
  z-index: 2;
}

```

```json
{
  "usingComponents": {
    "filter-bar": "jx-mini-antui/dist/filter/index"
  },
  "pullRefresh": false
}
```


```xml
<filter-bar className="filter-bar" />
```