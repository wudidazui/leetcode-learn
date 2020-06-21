// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

//  

// 示例：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4



var mergeTwoLists = function(l1, l2) {
  if(l1 == null){
      return l2
  }
  if(l2 == null){
      return l1
  }
  var result = {}
  if(l1.val < l2.val){
      result = l1
      result.next = mergeTwoLists(l1.next,l2)
  }else{
      result = l2
      result.next = mergeTwoLists(l1,l2.next)
  }
  return result
}

