// Auto Generated File! Do Not Edit.

// @ts-ignore
import { FeedItemTarget } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('FeedItemTarget', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of FeedItemTargets with all fields (if valid)', async () => {
            const feed_item_targets = await customer.feedItemTargets.list()
            expect(feed_item_targets).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(feed_item_targets.length > 0 && feed_item_targets[0].feed_item_target.resource_name) {
                expect(feed_item_targets[0].feed_item_target).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/feedItemTargets`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = feed_item_targets[0].feed_item_target.resource_name

                if(resource) {
                    const singleton = await customer.feedItemTargets.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/feedItemTargets`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.feedItemTargets.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
