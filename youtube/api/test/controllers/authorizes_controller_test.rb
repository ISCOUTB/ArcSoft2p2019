require 'test_helper'

class AuthorizesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @authorize = authorizes(:one)
  end

  test "should get index" do
    get authorizes_url, as: :json
    assert_response :success
  end

  test "should create authorize" do
    assert_difference('Authorize.count') do
      post authorizes_url, params: { authorize: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show authorize" do
    get authorize_url(@authorize), as: :json
    assert_response :success
  end

  test "should update authorize" do
    patch authorize_url(@authorize), params: { authorize: {  } }, as: :json
    assert_response 200
  end

  test "should destroy authorize" do
    assert_difference('Authorize.count', -1) do
      delete authorize_url(@authorize), as: :json
    end

    assert_response 204
  end
end
