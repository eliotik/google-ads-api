---
title: Create AdGroupCriterionLabel 
order: 4
type: create
entity: AdGroupCriterionLabel 
---

### Create an AdGroupCriterionLabel 

The `customer.adGroupCriterionLabels.create(ad_group_criterion_label)` method makes a new AdGroupCriterionLabel in an account. It also supports an array as its first agument for batch operations.


#### Arguments

- ##### entity *required* 
    The AdGroupCriterionLabel object or array of objects.
- ##### options *optional*
    Object of the form `{ validate_only, partial_failure }`:
    - ##### validate_only *optional, boolean* 
        When `true`, only checks whether the operation is valid. Makes no changes to your google ads account. Defaults to `false`.
    - ##### partial_failure *optional, boolean*
        Only useful when passing in an array of entities. When `false`, a single failure in the array of entities to create will cause the whole operation to be rolled back. When `true`, the system will still create the non-failed entities. Defaults to `false`.


#### Returns

- ##### results
    An array of the `resource_names` created.
- ##### partial_failure_error
    If `partial_failure` was set to `true`, an array of errors.
- ##### request
    The request object sent to google's gRPC services. Useful for debugging.
